export const useLoginForm = () => {
   const toast = useToast()

   const successNotification = () => {
      toast.add({ title:  'Zalogowano'})
   }

   const errorNotification = (err) => {
      toast.add({ title: err || 'Error', color: 'red'})
   }

   return {
      successNotification, errorNotification
   }
}