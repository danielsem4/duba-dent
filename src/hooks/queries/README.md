# queries

React Query hooks that wrap functions from `src/api`. One hook per query/mutation.

```ts
// example: useContactMutation.ts
import { useMutation } from '@tanstack/react-query'
import { sendContactMessage } from '@/api/contactApi'

export const useContactMutation = () =>
  useMutation({ mutationFn: sendContactMessage })
```
