interface Props {
  params: {
    slug: string;
  }
}
export default function WorkDetail({params}:Props){
  const {slug} = params;
  return <div>Work details{slug} page</div>
}