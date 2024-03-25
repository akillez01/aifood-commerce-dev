export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔'  //clicar em windows . para selecionar o emoji
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍨'
    default:
      return '🧑‍🍳'
  }
}
