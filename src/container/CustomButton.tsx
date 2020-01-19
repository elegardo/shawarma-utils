import React from 'react';
import {
    Button,
  } from "semantic-ui-react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: string;
}

export const CustomButton: React.FunctionComponent<IProps> = ({ action, children, onClick }) => {
    return (
        <Button
            inverted
            color='violet'
            className="button"
            onClick={onClick}
        >
          {action}
        </Button>
      );    
}
