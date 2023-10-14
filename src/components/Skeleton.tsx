import "../styles/components/_skeleton.scss";
export const Skeleton = () => {
  return (
    <div className="container skeleton-loader">
      <div className="container skeleton-loader-item"></div>
      <div className="container skeleton-loader-item"></div>
      <div className="container skeleton-loader-item"></div>
    </div>
  );
};
