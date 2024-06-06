import { filename } from 'pathe/utils'

export async function preloadImage(glob) {
  const loadedIcons = {}
  let iconsPath = {}

  for (const path in glob) {
    const mod = await glob[path]()
    loadedIcons[filename(path)] = mod.default
  }

  iconsPath = loadedIcons

  return iconsPath
}