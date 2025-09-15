import React from 'react';
import EditText from '../../components/ui/EditText';

const FooterSection = () => {
  return (
    <footer className="w-full">
      <div className="ml-2.5">
        <EditText 
          placeholder="© 2024 Hiphopboombox"
          className="w-full"
          layout_width="match_parent"
          padding="0"
          margin="0"
          position="static"
          variant="default"
          size="medium"
          value="© 2024 Hiphopboombox"
          onChange={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        />
      </div>
    </footer>
  );
};

export default FooterSection;