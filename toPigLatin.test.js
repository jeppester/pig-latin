const toPigLatin = require('./toPigLatin')

describe(toPigLatin, () => {
  test('it puts the first letter of the word at the end of the word and adds ay', () => {
    expect(toPigLatin('happy')).toEqual('appyhay')
  })

  test('it puts both consonants at the end of the word if the word starts with two consonants', () => {
    expect(toPigLatin('child')).toEqual('ildchay')
  })

  test('it doesn\'t move a beginning vowel to the end of the word', () => {
    expect(toPigLatin('apple')).toEqual('appleay')
  })

  test('it maintains capitalization', () => {
    expect(toPigLatin('Happy')).toEqual('Appyhay')
    expect(toPigLatin('Child')).toEqual('Ildchay')
  })

  test('it maintians punctuation', () => {
    expect(toPigLatin('Hello, "apple".')).toEqual('Ellohay, "appleay".')
  })

  test('it maintains line breaks', () => {
    expect(toPigLatin('Hello,\n"apple".')).toEqual('Ellohay,\n"appleay".')
  })
})
