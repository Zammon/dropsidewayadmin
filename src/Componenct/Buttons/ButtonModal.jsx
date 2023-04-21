export default function ButtonModal(props) {
    const { title, className, OnClick } = props;
    return(
        <div 
        className={className}
        style={{ display: 'flex', justifyContent:'center', alignItems: 'center',cursor: 'pointer', fontSize: '16px', fontWeight: '700'}}
        onClick={()=>{OnClick()}}
        >
            {title}
        </div>
    );
}