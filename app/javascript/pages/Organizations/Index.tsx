import { organizations } from "@/api";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "@inertiajs/react";

function Index() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Organizations</h1>
      <div className="flex items-center justify-between mb-6">
        <Link
          className="btn-indigo focus:outline-none"
          href={organizations.new.path()}
        >
          <span>Create</span>
          <span className="hidden md:inline"> Organization</span>
        </Link>
      </div>
    </div>
  );
}

Index.layout = (page: React.ReactNode) => (
  <MainLayout title="Organizations" children={page} />
)

export default Index;
