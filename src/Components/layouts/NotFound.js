import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-fluid">
      <Link to="/">
        <img src="/404.gif" class="img-fluid" alt="NOt Found" />
      </Link>
    </div>
  );
}
