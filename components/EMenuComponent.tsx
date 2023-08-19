


type Props = {
    handleMonthChange: any;   
    selectedMonth: any;
}
export default function EMenuComponent({handleMonthChange,selectedMonth}:Props) {

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
      ];


    return(<>

        <select
        id="month"
        name="month"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleMonthChange}
        value={selectedMonth}
      >
        <option value="">Select a month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    
    
    
    </>)
}