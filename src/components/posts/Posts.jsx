import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
      desc: "Goverment college of engineering karad",
      img: "https://media.licdn.com/dms/image/C4E1BAQGZKEacpYrqrA/company-background_10000/0/1615529144630?e=1698739200&v=beta&t=xKZZqV1aivkqgCp7Ai1yPmDUSYH99fXs5CLXuzTus5Q",
    },
    {
      id: 2,
      name: "Amit Desai",
      userId: 2,
      profilePic:
        "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
      desc: "Kaas plateau is a plateau located around 25 km from Satara. There are two ways to reach Kaas. one the more direct way from Satara and another from Tapola via the link road connecting Mahabaleshwar and Panchgani to Kas Pathar. ",
      img: "https://www.luxurytrailsofindia.com/wp-content/uploads/2017/05/satara-maharashtra.jpg",
    },
    {
      id: 3,
      name: "Pratik Thorat",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Natural beauty of India",
      img: "https://www.state.gov/wp-content/uploads/2019/04/shutterstock_1483337930v2-2107x1406-1.jpg",
    },
    {
      id: 4,
      name: "Sohan",
      userId: 4,
      profilePic:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
      desc: "Culture of India .The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. ",
      img: "https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
