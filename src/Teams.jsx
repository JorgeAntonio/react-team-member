const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return (
        <select
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
            className="form-select form-select-lg"
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
    )
}

export default Teams