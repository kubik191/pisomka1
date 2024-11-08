"use client";

import { useSession } from "next-auth/react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function NavigationMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Menu
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href="/">Home</Link>
        </MenuItem>
        {session ? (
          <MenuItem onClick={handleClose}>
            <Link href="/sign-out">Sign Out</Link>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <Link href="/sign-in">Sign In</Link>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
