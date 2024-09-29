import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { create } from "zustand";

// Create a global state for the english tests goals/info

export const useEnglishTest = create((set, get) => ({
  englishExamGoals: [],
  error: null,
  isLoading: false,
  loading: false,
  deletedItem: null,

  setEnglishExamGoals: (newEnglishExamGoals) =>
    set((state) => ({
      englishExamGoals: [newEnglishExamGoals, ...state.englishExamGoals],
    })),

  deleteEnglishExamGoals: async (itemId) => {
    try {
      set({ loading: true, error: null });
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase
        .from("english_test_languages")
        .delete()
        .eq("id", itemId);

      if (error) {
        throw error; // Throw an error to be caught
      }

      set({
        englishExamGoals: get().englishExamGoals.filter((goal) => {
          return goal.id !== itemId;
        }),
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  getEnglishExamGoals: async () => {
    try {
      set({ error: null, isLoading: true });

      const supabase = createSupabaseBrowserClient();
      const {
        data: {
          user: { id: user_id },
        },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      const { data, error: selectError } = await supabase
        .from("english_test_languages")
        .select("*")
        .eq("user_id", user_id);

      if (selectError) throw selectError;

      set({ englishExamGoals: data.reverse(), error: null, isLoading: false });
    } catch (err) {
      console.log(err);
      set({ error: err.message, isLoading: false });
    }
  },
}));
