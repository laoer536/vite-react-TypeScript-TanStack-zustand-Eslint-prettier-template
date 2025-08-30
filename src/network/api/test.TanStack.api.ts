export async function TestTanStackApi() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { name: 'TestTanStackApi' }
}
