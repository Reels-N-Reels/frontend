import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  const animationClass = inView ? "slide-in" : "";

  return (
    <div className={`animation ${animationClass}`} ref={ref}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
