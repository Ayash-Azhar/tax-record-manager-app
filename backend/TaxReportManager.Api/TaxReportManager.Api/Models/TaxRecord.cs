namespace TaxRecordManager.Api.Models
{
    public class TaxRecord
    {
        public int Id { get; set; }
        public required string RecordTitle { get; set; }
        public int TaxYear { get; set; }
        public decimal IncomeAmount { get; set; }
        public decimal DeductionsAmount { get; set; }
        public string? Notes { get; set; }
    }
}
