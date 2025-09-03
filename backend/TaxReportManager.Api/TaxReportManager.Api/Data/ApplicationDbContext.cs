

using Microsoft.EntityFrameworkCore;
using TaxRecordManager.Api.Models;

namespace TaxRecordManager.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<TaxRecord> TaxRecords { get; set; }
    }
}
