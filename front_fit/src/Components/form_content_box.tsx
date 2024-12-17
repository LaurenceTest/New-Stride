interface FormContentProps {
    title: string;
    instruction?: string;
    children: React.ReactNode;
    infoText?: string;
  }
  
  export const FormContent = ({
    title,
    instruction,
    children,
    infoText,
  }: FormContentProps): JSX.Element => {
    return (
      <section className="content">
        <h2 className="title">{title}</h2>
        {instruction && <p className="instruction">{instruction}</p>}
        {children}
        {infoText && <p className="info-text">{infoText}</p>}
      </section>
    );
  };
  