import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_DATABASE_URL as string,
  import.meta.env.VITE_DATABASE_PUBLIC_KEY as string,
);
