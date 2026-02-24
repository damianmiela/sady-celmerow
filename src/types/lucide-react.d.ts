declare module "lucide-react" {
  import { FC, SVGAttributes } from "react";

  interface IconProps extends SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  }

  type Icon = FC<IconProps>;

  export const Apple: Icon;
  export const Camera: Icon;
  export const ChevronDown: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const Droplets: Icon;
  export const Expand: Icon;
  export const ExternalLink: Icon;
  export const Facebook: Icon;
  export const FlaskConical: Icon;
  export const GlassWater: Icon;
  export const Home: Icon;
  export const Images: Icon;
  export const Leaf: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const Phone: Icon;
  export const Send: Icon;
  export const Sparkles: Icon;
  export const TreePine: Icon;
  export const X: Icon;
}
