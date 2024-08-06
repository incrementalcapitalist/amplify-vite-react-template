import { defineFunction } from "@aws-amplify/backend";
    
export const groqQueryFunction = defineFunction({
  name: "groq-query-function",
  entry: "./handler.ts"
});