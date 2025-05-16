export const apiVersion = '2024-07-25'
// process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-25'

export const dataset = "production"
// assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
// )

export const projectId = "20unlf15"
// assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
// )

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
