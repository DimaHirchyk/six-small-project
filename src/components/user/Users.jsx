import People from "./People";
import { Skeleton } from "./Skeleton";
import css from "./style.module.css";

export default function Users({
  searchValue,
  onChangeSearch,
  iteams,
  isLoading,
  onClickIvaite,
  invaites,
  onClickSendInvait,
}) {
  return (
    <>
      <div className={css.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearch}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>

      {isLoading ? (
        <div className={css.skeleton_list}>
          <Skeleton />
        </div>
      ) : (
        <ul className={css.users_list}>
          {iteams
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return fullName.includes(searchValue.toLowerCase());
            })
            .map((obj) => (
              <People
                onClickIvaite={onClickIvaite}
                isInvaited={invaites.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
            ))}
        </ul>
      )}

      {invaites.length > 0 && (
        <button onClick={onClickSendInvait} className={css.send_invite_btn}>
          Отправить приглашение
        </button>
      )}
    </>
  );
}
