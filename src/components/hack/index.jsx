import React, { createContext, useState } from 'react';
import MenuButton from './MenuButton';
import MenuOverlay from './MenuOverlay';

export default function ActionMenu({ children }) {
  let anchor = null;

  const contents = React.Children.map(children, (child) => {
    if (child.type === MenuButton) {
      anchor = child;
      return null;
    } else if (child.type === MenuOverlay) {
      return React.cloneElement(child, {
        renderAnchor: (anchorProps) => {
          return React.cloneElement(anchor, anchorProps);
        },
      });
    }
    return child;
  });
  return contents;
}

ActionMenu.Button = MenuButton;
ActionMenu.Overlay = MenuOverlay;
