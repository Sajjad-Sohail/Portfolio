import "./Testimonials.scss"
export default function Testimonials() {
    const data =[
        {
            id:1,
            name:"Michelle Harold",
            title:"CEO of ALBI",
            img:"./assets/testimonials1.jpg",
            icon:"./assets/bankingapp.jpg",
            desc:"Sajjad is very talented and hardworking",
            
        },
        {
            id:2,
            name:"Nancy Durden",
            title:"Senior Developer",
            img:"./assets/testimonials2.jpg",
            icon:"./assets/bankingapp.jpg",
            desc:"Sajjad is a team player who has top notch work ethics",
            featured:true,
        },
        {
            id:3,
            name:"Alex Kalinski",
            title:"CEO of ALBI",
            img:"./assets/testimonials3.jpg",
            icon:"./assets/bankingapp.jpg",
            desc:"Sajjad's analytic skills are amazing",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
            { data.map(d=>(
                <div className={d.featured ? "card featured":"card"}>
                    <div className="top">
                       
                        <img className="user" src={d.img} alt="cardimage" />
                        
                    </div>
                    <div className="center">
                        {d.desc}

                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}