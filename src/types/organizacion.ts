export interface Organizacion {
  id: number | string
  nombre: string
  rut: string
  email_contacto?: string | null
  creado_en: string
}