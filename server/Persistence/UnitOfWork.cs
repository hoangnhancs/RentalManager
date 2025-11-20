using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Interface;
using Domain.Interface.Repository;
using Persistence.Repositories;

namespace Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        private readonly ConcurrentDictionary<Type, object> _repositories = new();
        public UnitOfWork(DbContext context)
        {
            _context = context;
        }
        public Task<int> CommitAsync()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IBaseRepository<T> Repository<T>() where T : class
        {
            if (_repositories.ContainsKey(typeof(T)))
                return (IBaseRepository<T>)_repositories[typeof(T)];

            var repo = new BaseRepository<T>(_context);
            _repositories[typeof(T)] = repo;
            return repo;
        }
    }
}