export const Card = ({ children }) => {
    return (
        <article className='bg-[#f8f8f8] p-8 flex flex-col justify-center gap-10 rounded shadow-lg'>
            {children}
        </article>
    );
};

const Body = ({ children }) => {
    return <div className='flex flex-col gap-4'>{children}</div>;
};

const Footer = ({ children }) => {
    return <div className='flex gap-6'>{children}</div>;
};

Card.Body = Body;
Card.Footer = Footer;
