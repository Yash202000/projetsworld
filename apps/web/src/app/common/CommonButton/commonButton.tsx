import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface CommonButtonProps {
    children: ReactNode;
    color: string;
    disabled: boolean;
    size: string;
    sx: object;
    variant: string;
    onClick: any;
}

const CommonButton = ({children,color,disabled,size,sx,variant, onClick}: CommonButtonProps) => {
    return (
        <Button
            color={color as 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined}
            disabled={disabled}
            size={size as 'small' | 'medium' | 'large' | undefined}
            variant={variant as 'text' | 'outlined' | 'contained' | undefined}
            sx={sx}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default CommonButton;
