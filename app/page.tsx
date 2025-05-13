import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Tomas Lönnblad and and i also like programing in all way.
        Going on class modules on router page and all cind of css styles.
        With beside to docker images whos staff has db and backend in the packed.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
