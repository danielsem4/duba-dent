import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  contactSchema,
  type ContactForm,
} from '@/screens/home/schema/contact.schema'

export function Contact() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const onSubmit = handleSubmit(async () => {
    // No backend yet — see src/api/contactApi.ts to wire a real endpoint.
    await new Promise((r) => setTimeout(r, 400))
    toast.success(t('contact.success'))
    reset()
  })

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {t('contact.title')}
        </h2>
        <p className="text-muted-foreground mt-2">{t('contact.subtitle')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent>
            <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name">{t('contact.name')}</Label>
                <Input
                  id="name"
                  aria-invalid={!!errors.name}
                  {...register('name')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  {...register('email')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  aria-invalid={!!errors.message}
                  {...register('message')}
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {t('contact.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-center gap-6">
          <InfoRow icon={<Phone className="size-5" />} label={t('contact.phone')}>
            +972 3-000-0000
          </InfoRow>
          <InfoRow icon={<Mail className="size-5" />} label={t('contact.email')}>
            hello@dubadent.com
          </InfoRow>
          <InfoRow
            icon={<MapPin className="size-5" />}
            label={t('contact.address')}
          >
            Tel Aviv, Israel
          </InfoRow>
          <InfoRow icon={<Clock className="size-5" />} label={t('contact.hours')}>
            {t('contact.hoursValue')}
          </InfoRow>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-muted-foreground text-sm">{children}</div>
      </div>
    </div>
  )
}
