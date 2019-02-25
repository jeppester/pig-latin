const vowels = ['a', 'e', 'i', 'o', 'u']

// This will match a whole word and put eventual starting
// consonants in one group and the rest of in a second group
const pigLatinMatcher = new RegExp(`^([^${vowels.join('')}]*)(\\w+)`)

const upperCaseFirst = string => string[0].toUpperCase() + string.slice(1)

const firstIsUpperCase = string => /^[A-Z]/.test(string)

const isWord = string => /^[a-zA-z]+$/.test(string)

const partToPigLatin = part => {
  // Don't attempt to convert if it's a white space or dash or similar
  if (!isWord(part)) return part

  return part.replace(pigLatinMatcher, (_match, beginningConsonants, rest) => {
    if (firstIsUpperCase(beginningConsonants)) {
      rest = upperCaseFirst(rest)
      beginningConsonants = beginningConsonants.toLowerCase()
    }
    return `${rest}${beginningConsonants}ay`
  })
}

const toPigLatin = string => {
  // Split by non-letters, and keep them
  const parts = string.split(/([^a-zA-Z])/)

  const convertedParts = parts.map(partToPigLatin)

  return convertedParts.join('')
}

module.exports = toPigLatin
