import { useEffect } from 'react'

/** Sets document.title, restoring the previous title on unmount. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
