import {redirect} from "next/navigation";

export default async function CatchAllPage() {
    redirect('/not-found');
}
