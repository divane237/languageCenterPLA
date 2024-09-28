import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { create } from "zustand";

// Create a global state for the english tests goals/info

export const useEnglishTest = create((set) => ({
  englishExamGoals: [],
  setEnglishExamGoals: (newEnglishExamGoals) =>
    set((state) => ({
      englishExamGoals: [newEnglishExamGoals, ...state.englishExamGoals],
    })),
  deleteEnglishExamGoals: (itemId) =>
    set((state) => ({
      englishExamGoals: state.englishExamGoals.filter((goal, i) => {
        return i !== itemId;
      }),
    })),
  fetch: async () => {
    const supabase = createSupabaseBrowserClient();
    const {
      data: {
        user: { id: user_id },
      },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.log(authError);
    }

    const { data, error } = await supabase
      .from("english_test_languages")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      console.log("Error fetching data (Zustand store)", error);
    } else {
      set({ englishExamGoals: data.reverse() });
    }
  },
}));
