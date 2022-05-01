import headerStyles from '../styles/header.module.css';

const Header = () => {
    let x =5 ;
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>hello again header page</span> nextjs
			</h1>
            <p className={headerStyles.description}>stay up to date with tech</p>
		</div>
	);
};

export default Header;
