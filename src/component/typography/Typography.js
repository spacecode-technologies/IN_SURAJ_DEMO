import { Typography } from "@material-ui/core";
const CustomTypography = (props) => {
  const {
    component,
    color,
    display,
    letterSpacing,
    fontWeight,
    fontSize,
    variant,
    p,
    pb,
    pt,
    pl,
    pr,
    mt,
    ml,
    mr,
    mb,
    m,
    onClick,
    children,
    align,
    className
  } = props;
  return (
    <Typography
      component={component}
      color={color}
      display={display}
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      variant={variant}
      className={className}
      fontWeight={fontWeight}
      align={align}
      p={p}
      pb={pb}
      pt={pt}
      pl={pl}
      pr={pr}
      mt={mt}
      ml={ml}
      mr={mr}
      mb={mb}
      m={m}
      onClick={onClick}
      children={children}
    />
  );
};
export default CustomTypography;
