import { Typography, Tooltip } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';
import { useRef, useEffect, useState } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

interface EllipseTooltipTextProps {
  children: any;
  placement?: TooltipProps['placement'];
  sx?: SxProps<Theme>;
}

const EllipsisTooltipText = ({
  children,
  placement = 'top',
  sx,
}: EllipseTooltipTextProps): JSX.Element => {
  const textElementRef = useRef<any>(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const textRef = textElementRef.current;
    const updateOverflowingStatus = () => {
      if (textRef) {
        setIsOverflowing(textRef.offsetWidth < textRef.scrollWidth);
      }
    };
    const resizeObserver = new ResizeObserver(updateOverflowingStatus);

    if (textRef) {
      resizeObserver.observe(textRef);
    }
    return () => {
      if (textRef) {
        resizeObserver.unobserve(textRef);
      }
    };
  }, []);

  return (
    <Tooltip
      disableHoverListener={!isOverflowing}
      placement={placement}
      title={children}
    >
      <Typography
        ref={el => (textElementRef.current = el)}
        data-testid="ellipsis-text"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Tooltip>
  );
};

export default EllipsisTooltipText;
