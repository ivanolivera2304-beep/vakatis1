import { ReactNode } from "react";
import { FORMSUBMIT_URL } from "@/lib/bookingLinks";

type Props = {
  service: string;
  link: string;
  children: ReactNode;
  className?: string;
};

export default function ReserveFormButton({ service, link, children, className }: Props) {
  return (
    <form action={FORMSUBMIT_URL} method="POST" target="_blank" className="inline-flex">
      <input type="hidden" name="_subject" value={`Nueva interacción de reserva: ${service}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={link} />
      <input type="hidden" name="Servicio seleccionado" value={service} />
      <input type="hidden" name="Enlace de reserva/contacto" value={link} />
      <input type="hidden" name="Origen" value="Sitio web Vakatis Guest Relations" />
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}
