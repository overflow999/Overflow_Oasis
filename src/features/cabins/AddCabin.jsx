import Button from "../../ui/Button";
import Model from "../../ui/Model";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <div>
      <Model>
        <Model.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Model.Open>
        <Model.Window name="cabin-form">
          <CreateCabinForm />
        </Model.Window>
      </Model>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModel, setisOpenModel] = useState(false);
//   return (
//     <div>
//       {" "}
//       <Button onClick={() => setisOpenModel((isOpenModel) => !isOpenModel)}>
//         Add new Cabin
//       </Button>
//       {isOpenModel && (
//         <Model onClose={() => setisOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setisOpenModel(false)} />
//         </Model>
//       )}
//     </div>
//   );
// }
