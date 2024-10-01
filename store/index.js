import { getStudentData } from "@/lib/actions/user";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { create } from "zustand";

// Create a global state for the english tests goals/info

export const useEnglishTest = create((set, get) => ({
  englishExamGoals: [],
  error: null,
  isLoading: true,
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
        .from("english_test_goals")
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
        .from("english_test_goals")
        .select(
          "id, test_name, test_category, exam_date, current_level, required_score, tutor_name"
        )
        .eq("user_id", user_id);

      if (selectError) throw selectError;

      set({ englishExamGoals: data.reverse(), error: null, isLoading: false });
    } catch (err) {
      console.log(err);
      set({ error: err.message, isLoading: false });
    }
  },
}));

export const useStudentInfo = create((set, get) => ({
  student: null,
  error: null,
  getStudentInfo: async () => {
    //
    try {
      const response = await getStudentData();

      const { student, error, message } = JSON.parse(response);

      if (error) {
        set({ error: error, student: null });
      } else {
        set({ student: student, error: null });
      }

      //
    } catch (err) {
      //
      set({ error: "An erro occurred while fetching sudent info." });
    }
  },
}));
