export const commands = [
  'tota11y',
]

export default async function() {
  await import(/* webpackIgnore: true */ 'https://cdnjs.cloudflare.com/ajax/libs/tota11y/0.1.6/tota11y.min.js')
}
