export default function Banner({ title, subtitle, children }){
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children && <div className="cta">{children}</div>}
      </div>
    </section>
  );
}