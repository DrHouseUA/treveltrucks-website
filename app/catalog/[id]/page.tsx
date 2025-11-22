import styles from "./DetailPage.module.css";
import VehicleDescription from "@/components/VehicleDescription/VehicleDescription";
import TabsInDetails from "@/components/TabsInDetails/TabsInDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className={styles["main-container"]}>
      <VehicleDescription id={id} />
      <div>
        <TabsInDetails id={id} />
      </div>
    </main>
  );
}
