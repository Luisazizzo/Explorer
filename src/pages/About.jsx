import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <NavBar />
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        debitis at blanditiis? Enim cum maiores autem soluta laudantium
        blanditiis doloribus quaerat harum, aut pariatur asperiores possimus
        praesentium vel, totam provident! Temporibus ex rerum laboriosam sunt
        quo modi, similique tempore ducimus laborum tenetur facere delectus
        recusandae explicabo animi voluptas, alias accusamus eveniet
        reprehenderit quaerat officia voluptatem totam sed, quod maxime! Illo.
        Unde velit inventore porro ut soluta distinctio fuga similique, eum
        fugiat laborum consequuntur consequatur laboriosam. Aut maxime doloribus
        est recusandae molestias, enim quibusdam aspernatur sequi ab quam,
        cumque provident voluptatibus? Ducimus libero neque enim nostrum atque
        aliquid veritatis mollitia officia ex aliquam corrupti tempora dolorum,
        eius quidem distinctio accusamus iusto provident rerum asperiores
        possimus in non nesciunt, at quo. Perferendis! Doloremque iusto aperiam
        esse tempore architecto distinctio tempora eos atque aliquid unde
        molestiae vel, a deserunt dolores adipisci! Sapiente modi ex tempore
        maxime reprehenderit velit odit molestiae unde deleniti tenetur?
        Accusamus quisquam fugit eaque quis voluptatum blanditiis quae deleniti,
        magnam dolorem reprehenderit aliquam incidunt sunt aut similique
        assumenda hic quaerat, consequuntur explicabo placeat amet nam maiores.
        Culpa mollitia reprehenderit quod. Dicta adipisci soluta in saepe ipsum
        veritatis nobis ab earum tempora. Nulla molestias corporis, labore est
        consectetur aliquid iure fuga aspernatur quae? Perspiciatis labore
        libero, voluptates sint alias tempore nisi? Voluptatem voluptate quo
        maiores, rerum ab porro minus. Unde dolores, natus dolorem reiciendis
        cum sequi eaque laudantium illo nisi assumenda architecto sapiente esse.
        Dolor, illo soluta vel vitae hic doloremque? Iusto eligendi quibusdam
        pariatur omnis? Mollitia architecto eos impedit inventore maiores ad
        quasi necessitatibus similique porro, nostrum, corporis vel doloremque
        totam, cumque eius doloribus in ipsum ducimus saepe sunt unde. Vero
        ipsum dolore molestiae ad accusantium voluptatibus vitae molestias saepe
        odit unde voluptas officiis, necessitatibus distinctio ex recusandae
        ullam quibusdam amet sit cum asperiores temporibus aliquam? Iusto fuga
        numquam odio! Odio error dolores ipsam nihil perferendis laudantium,
        nesciunt eos recusandae, tenetur suscipit neque. Praesentium deleniti
        sequi amet voluptatem labore, voluptatum blanditiis culpa libero
        voluptas accusamus. Saepe itaque maxime libero officia. Labore nostrum
        eaque atque ut ea sed laborum officiis corporis. Dicta quis dolore natus
        vitae velit ratione veniam maxime facere. Accusantium repudiandae
        assumenda illo exercitationem debitis iure minima sed corrupti? Placeat
        molestias totam, commodi enim exercitationem, id quisquam eius, est hic
        sed mollitia. Quo optio facilis cum saepe, sequi culpa consectetur eius
        iste, repudiandae architecto, possimus incidunt non repellat est! Fuga
        magnam aut porro labore excepturi quas sit debitis, nihil suscipit
        cumque expedita sunt id rerum repellat eligendi, voluptatum dignissimos
        aspernatur ipsam nisi illum unde voluptates! Eum exercitationem eos
        iure. Deserunt impedit dolor recusandae ad velit quas magni ab doloribus
        accusamus vitae, illo fugit alias veritatis similique sint hic minus
        enim magnam provident quibusdam! Cumque odit facere atque ipsum
        possimus. Vitae laboriosam, odit ipsum quisquam et eligendi, velit
        consequuntur provident temporibus labore maiores placeat accusamus!
        Aliquid illum reiciendis inventore, repellendus ratione quas, impedit,
        suscipit quod provident facilis distinctio facere nostrum. Possimus
        autem necessitatibus ea rem mollitia eveniet nobis unde reiciendis,
        perspiciatis, quidem id rerum eligendi, nisi vero inventore! Dignissimos
        sunt quae quos alias id magnam ea nostrum temporibus? Culpa,
        repudiandae. Esse, harum? Doloribus dolorem, voluptas sequi adipisci
        sint itaque mollitia dicta inventore ipsa, maiores repellendus
        exercitationem at rem reprehenderit culpa neque nesciunt perferendis
        fugiat.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Footer />
    </div>
  );
}
