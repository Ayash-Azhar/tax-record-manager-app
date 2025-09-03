using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaxRecordManager.Api.Data;
using TaxRecordManager.Api.Models;


namespace TaxRecordManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaxRecordsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TaxRecordsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/taxrecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaxRecord>>> GetTaxRecords()
        {
            return await _context.TaxRecords.ToListAsync();
        }

        // GET: api/taxrecords/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<TaxRecord>> GetTaxRecord(int id)
        {
            var taxRecord = await _context.TaxRecords.FindAsync(id);

            if (taxRecord == null)
            {
                return NotFound();
            }

            return taxRecord;
        }

        // POST: api/taxrecords
        [HttpPost]
        public async Task<ActionResult<TaxRecord>> PostTaxRecord(TaxRecord taxRecord)
        {
            _context.TaxRecords.Add(taxRecord);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaxRecord), new { id = taxRecord.Id }, taxRecord);
        }

        // PUT: api/taxrecords/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaxRecord(int id, TaxRecord taxRecord)
        {
            if (id != taxRecord.Id)
            {
                return BadRequest();
            }

            _context.Entry(taxRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.TaxRecords.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/taxrecords/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaxRecord(int id)
        {
            var taxRecord = await _context.TaxRecords.FindAsync(id);
            if (taxRecord == null)
            {
                return NotFound();
            }

            _context.TaxRecords.Remove(taxRecord);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
