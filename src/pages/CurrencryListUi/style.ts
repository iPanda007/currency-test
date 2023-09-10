import { css } from "@stitches/core";

export const inputBox = css({
    textAlign:"center",
    padding : "50px  0",

    '& input':{
         padding: '10px',
         borderRadius:"0.25rem",
         background:"#fff",
         boxShadow:"3px 3px 3px -1px #00000010"
    }

})

export const cardListBox = css({
    padding:" 0 30px",
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"40px"
})

export const cardListui = css({
        padding:"15px",
        background:"white",
        boxShadow:"3px 3px 3px -1px #00000010",
        borderRadius:"10px",
        cursor:"pointer",
        overflow:"hidden",
        '&:hover':{
                background:"#f7f7f7"
        },
        '& > div:nth-of-type(1)': {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        },
        '& > div:nth-of-type(2)': {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        },
        '& img':{
            width: 35,
            height: 35,
            borderRadius:"50%",
            objectFit:"cover"
        }
})