import pluralizeEN from "pluralize"

const pluralizeCache = new Map<string, string>()
pluralizeEN.addUncountableRule("info")

/**
 * Function to pluralize English words.
 * @param word
 */
export function pluralize(word: string): string {
  // TODO: Implement language specific pluralize function

  // Check cache first for O(1) lookup
  const cached = pluralizeCache.get(word)
  if (cached !== undefined) {
    return cached
  }

  // Compute and cache the result
  const result = pluralizeEN(word)
  pluralizeCache.set(word, result)
  return result
}
