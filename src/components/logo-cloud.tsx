import { clsx } from 'clsx'
import {SHASHKIN_SITE_URL, SUNCAR_SITE_URL} from "@/lib/variables";

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-evenly max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <a href={SHASHKIN_SITE_URL}>
        <img
          alt="Shashkin Clinic "
          src="/logo-cloud/shashkin-clinic.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-24"
        />
      </a>
      <a href={SUNCAR_SITE_URL}>
        <img
          alt="Suncar Clinic"
          src="/logo-cloud/suncar.png"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-24"
        />
      </a>
      <a href={SUNCAR_SITE_URL}>
        <img
          alt="Nvidia"
          src="/logo-cloud/nvidia.svg"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-24"
        />
      </a>
      {/*<img*/}
      {/*  alt="SavvyCal"*/}
      {/*  src="/logo-cloud/savvycal.svg"*/}
      {/*  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt="Laravel"*/}
      {/*  src="/logo-cloud/laravel.svg"*/}
      {/*  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt="Tuple"*/}
      {/*  src="/logo-cloud/tuple.svg"*/}
      {/*  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt="Transistor"*/}
      {/*  src="/logo-cloud/transistor.svg"*/}
      {/*  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  alt="Statamic"*/}
      {/*  src="/logo-cloud/statamic.svg"*/}
      {/*  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"*/}
      {/*/>*/}
    </div>
)
}
