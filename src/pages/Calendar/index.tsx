export function Calendar() {

    const day = [
        '一', '二', '三', '四', '五', '六', '日'
    ]

  return (
    <div className="w-100 b-1 b-solid b-gray/50 rounded-md">
      <header className="flex items-center justify-end px-3 py-2 b-b-1 b-b-solid b-gray/50">
        <select className="mr-3">
          <option>2023年</option>
        </select>
        <select className="mr-3">
          <option>7月</option>
        </select>
        <button>年</button>
        <button>月</button>
      </header>
      <main className="px-3">
        <div className="grid grid-cols-7 text-center lh-10">
            {
                day.map((item) => (
                    <div key={item}>{item}</div>
                ))
            }
        </div>
        <div className="grid grid-cols-7 text-center">
            <div>1</div>
        </div>
      </main>
    </div>
  );
}